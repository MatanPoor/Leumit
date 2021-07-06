using LeumitHealthCareWebApi.Model.Entities;
using System.Threading.Tasks;

namespace LeumitHealthCareWebApi.Services
{
    public interface IRepositoryService
    {
        Task<NumbersString> getNumbersString();
    }
}