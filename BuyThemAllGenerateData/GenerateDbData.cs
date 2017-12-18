using System;
using System.Data.Entity;
using System.Linq;
using BuyThemAllModel;

namespace BuyThemAllGenerateData
{
    internal class GenerateDbData
    {
        #region Constants

        private static readonly BuyThemAllEntities db = new BuyThemAllEntities();
        private static readonly string mugDesc = "Niesamowity {0} z najlepszej jakości porcelany. Polecany przez miliony zadowolonych klientów. Nie można przegapić takiej okazji. Edycja limitowana. Tak, niedługo może być niedostępny. Zegar tyka a kubek czeka na właściciela.";
        private static readonly string posterDesc = "Niesamowity {0} drukowany na metalu. Polecany przez miliony zadowolonych klientów. Nie można przegapić takiej okazji. Edycja limitowana. Tak, niedługo może być niedostępny. Zegar tyka a plakat czeka na właściciela.";
        private const string tShirtDesc = "Niesamowita {0} z najlepszej jakości bawełny. Polecana przez miliony zadowolonych klientów. Nie można przegapić takiej okazji. Edycja limitowana. Tak, niedługo może być niedostępna. Zegar tyka a koszulka czeka na właściciela.";

        #endregion
        #region Public static methods

        public static void Generate()
        {
            var rand = new Random();
            DbSet<Category> categories = db.Categories;
            DbSet<Graphic> graphics = db.Graphics;
            int[] manufacturers = db.Manufacturers.Select(m => m.Id).ToArray();
            int[] avalibilities = db.Avalibilities.Select(a => a.Id).ToArray();

            foreach (Graphic graph in graphics)
            {
                foreach (Category cat in categories)
                {
                    var prod = new Product();
                    prod.IsDiscounted = rand.Next(2) == 1;
                    if (prod.IsDiscounted)
                    {
                        prod.DiscountPercent = rand.Next(1, 6) * 10;
                    }
                    prod.ManufacturerId = manufacturers[rand.Next(manufacturers.Length)];
                    prod.AvalibilityId = avalibilities[rand.Next(avalibilities.Length)];
                    prod.GraphicId = graph.Id;
                    prod.CategoryId = cat.Id;
                    if (cat.Code == "T-SHIRT")
                    {
                        prod.Price = rand.Next(40, 100) + 0.99;
                        prod.Name = $"koszulka {graph.Name}";
                        prod.Description = string.Format(tShirtDesc, prod.Name);
                    }
                    else if (cat.Code == "MUG")
                    {
                        prod.Price = rand.Next(20, 35) + 0.99;
                        prod.Name = $"kubek {graph.Name}";
                        prod.Description = string.Format(mugDesc, prod.Name);
                    }
                    else if (cat.Code == "POSTER")
                    {
                        prod.Price = rand.Next(25, 60) + 0.99;
                        prod.Name = $"plakat {graph.Name}";
                        prod.Description = string.Format(posterDesc, prod.Name);
                    }

                    db.Products.Add(prod);
                }
            }

            db.SaveChanges();
            Console.WriteLine("Products added.");
        }

        #endregion
    }
}