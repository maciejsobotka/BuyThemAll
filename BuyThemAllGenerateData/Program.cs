using System;

namespace BuyThemAllGenerateData
{
    internal class Program
    {
        #region Private methods

        private static void Main(string[] args)
        {
            GenerateDbData.Generate();
            Console.ReadLine();
        }

        #endregion
    }
}