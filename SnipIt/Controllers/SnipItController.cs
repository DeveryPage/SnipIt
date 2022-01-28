using CodeSnipIt.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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


        // POST api/<SnipItController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SnipItController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SnipItController>/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _snipRepo.Delete(id);
            return NoContent();
        }
    }
}
