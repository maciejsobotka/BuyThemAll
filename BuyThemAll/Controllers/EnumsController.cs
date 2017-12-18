using System.Linq;
using System.Web.Http;
using BuyThemAllModel;

namespace BuyThemAll.Controllers
{
    public class EnumsController : ApiController
    {
        #region Private fields

        private readonly BuyThemAllEntities db = new BuyThemAllEntities();

        #endregion
        #region Public methods

        // GET: api/Enums/GetAvalibilities
        public IQueryable<Avalibility> GetAvalibilities()
        {
            return db.Avalibilities;
        }

        // GET: api/Enums/GetShipmentTypes
        public IQueryable<ShipmentType> GetShipmentTypes()
        {
            return db.ShipmentTypes;
        }

        // GET: api/Enums/GetVoivodeships
        public IQueryable<Voivodeship> GetVoivodeships()
        {
            return db.Voivodeships;
        }

        #endregion
    }
}