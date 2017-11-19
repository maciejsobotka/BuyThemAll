using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuyThemAllGenerateData
{
    class Program
    {
        static void Main(string[] args)
        {
            GenerateDbData.Generate();
            Console.ReadLine();
        }
    }
}
