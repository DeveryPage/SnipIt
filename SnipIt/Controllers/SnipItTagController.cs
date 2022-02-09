using CodeSnipIt.Models;
using CodeSnipIt.Repositories;
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
    public class SnipItTagController : ControllerBase
    {
        private readonly ISnipItTagRepository _stRepo;

        public SnipItTagController(ISnipItTagRepository snipItTagRepository)
        {
            _stRepo = snipItTagRepository;
        }

        // GET: api/<SnipItTagController>
        [HttpGet("{snipItId}")]
        public IActionResult Get(int snipItId)
        {
            try
            {
                var snipItTags = _stRepo.Get(snipItId);
                return Ok(snipItTags);
            }
            catch
            {
                return NoContent();
            }
        }


        // POST api/<SnipItTagController>
        [HttpPost("{id}")]
        public IActionResult Update(int id, List<int> selectedTagIds)
        {
                try
                {
                    _stRepo.DeleteBySnipItId(id);
                foreach(var selectedTagId in selectedTagIds)
                {
                    if (selectedTagId != 0)
                    {
                        var snipItTag = new SnipItTag
                        {
                            SnipItId = id,
                            TagId = selectedTagId
                        };
                        _stRepo.Add(snipItTag);
                    }
                }
                    return NoContent();
                }
                catch
                {
                    return BadRequest();
                }
        }


        // DELETE api/<SnipItTagController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _stRepo.DeleteBySnipItId(id);
            return NoContent();
        }
    }
}
