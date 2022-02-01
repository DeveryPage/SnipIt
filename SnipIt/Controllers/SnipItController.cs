using CodeSnipIt.Models;
using CodeSnipIt.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CodeSnipIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SnipItController : ControllerBase
    {
        private readonly ISnipItRepository _snipRepo;
        private readonly IUserProfileRepository _upRepo;

        public SnipItController(
    ISnipItRepository snipRepository,
    IUserProfileRepository userProfileRepository)
        {
            _snipRepo = snipRepository;
            _upRepo = userProfileRepository;
        }



        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_snipRepo.GetAllSnipIts());
        }

        [HttpGet("{id}")]
        [Authorize]
        public IActionResult GetSnipIt(int id)
        {
            var snipit = _snipRepo.GetSnipItById(id);
            if (snipit == null)
            {
                return NotFound();
            }
            return Ok(snipit);
        }


        // POST api/<SnipItController>
        [HttpPost]
        [Authorize]
        public IActionResult Post(SnipIt snipit)
        {
            if(string.IsNullOrWhiteSpace(snipit.Title))
            {
                snipit.Title = null;
                return NoContent();
            }

            var userId = GetCurrentUserProfileId();
            if (userId.HasValue)
            {
                snipit.UserProfileId = (int)userId;
                _snipRepo.Add(snipit);

                return CreatedAtAction("Get", new { id = snipit.Id }, snipit);
            }
            return StatusCode(403);
        }

        // PUT api/<SnipItController>/5
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, SnipIt snipit)
        {
            if (id != snipit.Id)
            {
                return BadRequest();
            }

            _snipRepo.Update(snipit);
            return NoContent();
        }

        // DELETE api/<SnipItController>/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _snipRepo.Delete(id);
            return NoContent();
        }


        private int? GetCurrentUserProfileId()
        {
            var claim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            if (claim != null)
            {
                var user = _upRepo.GetByFirebaseUserId(claim.Value);
                if (user != null)
                {
                    return user.Id;
                }
                return null;
            }
            return null;
        }
    }
}
