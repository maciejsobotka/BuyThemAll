using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.Remoting.Channels;
using System.Text;
using System.Threading.Tasks;
using BuyThemAllModel;

namespace BuyThemAllGenerateData
{
    class GenerateDbData
    {
        private static readonly BuyThemAllEntities db = new BuyThemAllEntities();
        private const string tShirtDesc = "Niesamowita {0} z najlepszej jakości bawełny. Polecana przez miliony zadowolonych klientów. Nie można przegapić takiej okazji. Edycja limitowana. Tak, niedługo może być niedostępna. Zegar tyka a koszulka czeka na właściciela.";
        private static readonly string mugDesc = "Niesamowity {0} z najlepszej jakości porcelany. Polecany przez miliony zadowolonych klientów. Nie można przegapić takiej okazji. Edycja limitowana. Tak, niedługo może być niedostępny. Zegar tyka a kubek czeka na właściciela.";
        private static readonly string posterDesc = "Niesamowity {0} drukowany na metalu. Polecany przez miliony zadowolonych klientów. Nie można przegapić takiej okazji. Edycja limitowana. Tak, niedługo może być niedostępny. Zegar tyka a plakat czeka na właściciela.";

        public static void Generate()
        {
            var rand = new Random();
            var categories = db.Categories;
            var graphics = db.Graphics;
            var manufacturers = db.Manufacturers.Select(m => m.Id).ToArray();
            var avalibilities = db.Avalibilities.Select(a => a.Id).ToArray();

            foreach (var graph in graphics)
            {
                foreach (var cat in categories)
                {
                    var prod = new Product();
                    prod.Price = rand.NextDouble() * 100 + 100;
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
                        prod.Name = $"koszulka {graph.Name}";
                        prod.Description = string.Format(tShirtDesc, prod.Name);
                    }
                    else if (cat.Code == "MUG")
                    {
                        prod.Name = $"kubek {graph.Name}";
                        prod.Description = string.Format(mugDesc, prod.Name);
                    }
                    else if (cat.Code == "POSTER")
                    {
                        prod.Name = $"plakat {graph.Name}";
                        prod.Description = string.Format(posterDesc, prod.Name);
                    }

                    db.Products.Add(prod);
                }
            }

            db.SaveChanges();
            Console.WriteLine("Products added.");
        }
    }
}
