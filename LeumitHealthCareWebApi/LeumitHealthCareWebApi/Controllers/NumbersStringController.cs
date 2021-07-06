using LeumitHealthCareWebApi.Model.Entities;
using LeumitHealthCareWebApi.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LeumitHealthCareWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NumbersStringController : ControllerBase
    {
        private IRepositoryService _repo;
        public NumbersStringController(IRepositoryService repo)
        {
            _repo = repo;
        }
        // GET: <NumbersStringController>
        [HttpGet("")]
        public async Task<ActionResult<NumbersString>> Get()
        {
            var str = await _repo.getNumbersString();
            return Ok(str);
        }


       
    }
}
