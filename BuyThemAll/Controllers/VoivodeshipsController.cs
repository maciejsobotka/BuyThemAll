using System.Linq;
using System.Web.Http;
using BuyThemAllModel;

namespace BuyThemAll.Controllers
{
    public class VoivodeshipsController : ApiController
    {
        #region Private fields

        private readonly BuyThemAllEntities db = new BuyThemAllEntities();

        #endregion
        #region Public methods

        // GET: api/Voivodeships/GetVoivodeships
        public IQueryable<Voivodeship> GetVoivodeships()
        {
            return db.Voivodeships;
        }

        #endregion
    }
}