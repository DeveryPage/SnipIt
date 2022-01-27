﻿using CodeSnipIt.Repositories;
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
            ISnipItRepository snipItRepository,
            IUserProfileRepository userProfileRepository)
        {
            _snipRepo = snipItRepository;
            _upRepo = userProfileRepository;
        }

        // GET: api/<SnipItController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_snipRepo.GetAllSnipIts());
        }

        // GET api/<SnipItController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
        public void Delete(int id)
        {
        }
    }
}
