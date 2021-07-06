using LeumitHealthCareWebApi.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeumitHealthCareWebApi.Services
{
    public class RepositoryService : IRepositoryService
    {

        public Task<NumbersString> getNumbersString()
        {
            NumbersString numbersString = new NumbersString("one two three four five");
            return Task.FromResult(numbersString);
        }
    }
}
