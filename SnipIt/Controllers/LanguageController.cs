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
    public class LanguageController : ControllerBase
    {
        private readonly ILanguageRepository _languageRepository;

        public LanguageController(ILanguageRepository languageRepository)
        {
            _languageRepository = languageRepository;
        }

        // GET: api/<LanguageController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_languageRepository.GetAllLanguages());
        }


        // POST api/<LanguageController>
        [HttpPost]
        [Authorize]
        public IActionResult Post(Language language)
        {
            _languageRepository.Add(language);
            return CreatedAtAction("Get", new { id = language.Id }, language);
        }

        // PUT api/<LanguageController>/5
        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Put(int id, Language language)
        {
            if (id != language.Id)
            {
                return BadRequest();
            }

            _languageRepository.UpdateLanguage(language);
            return NoContent();
        }

        // DELETE api/<LanguageController>/5
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            _languageRepository.Delete(id);
            return NoContent();
        }

    }
}
