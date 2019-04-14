using IMCBA_Hiring_Test.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace IMCBA_Hiring_Test.Bussiness
{
    public static class IMCBAProxy
    {
        private const string MainUrl = "https://imc-hiring-test.azurewebsites.net";
        private const string GetCitiesURI = "/Contact/Cities?province=";
        private const string SaveURI = "/Contact/Save";

        private static Dictionary<string, string> provinces = new Dictionary<string, string>() {
            { "Alberta", "AB" },
            { "British Columbia", "BC" },
            { "Manitoba", "MB" },
            { "New Brunswick", "NB" },
            { "Newfoundland and Labrador", "NL" },
            { "Northwest Territories", "NT" },
            { "Nova Scotia", "NS" },
            { "Nunavut", "NU" },
            { "Ontario", "ON" },
            { "Prince Edward Island", "PE" },
            { "Quebec", "QC" },
            { "Saskatchewan", "SK" },
            { "Yukon", "YT" }
        };

        public static IEnumerable<ProvinceModel> GetProvinces()
        {
            return provinces.Select(x => new ProvinceModel { Value = x.Value, Text = x.Key });
        }

        private static StringContent ConvertParams(Object values)
        {
            var json = JsonConvert.SerializeObject(values);
            return new StringContent(json, UnicodeEncoding.UTF8, "application/json");
        }

        public static async Task<IEnumerable<string>> GetCitiesAsync(string province)
        {
            IEnumerable<string> cities = new  List<string>();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(MainUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.GetAsync(GetCitiesURI + province);
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = await response.Content.ReadAsStringAsync();
                    cities = JsonConvert.DeserializeObject<CityModel>(jsonString).Items?.Where(x => !x.StartsWith("X")) ?? cities;
                }
            }

            return cities;
        }

        public static async Task<bool> SaveContactUsAsync(ContactUsModel model)
        {
            bool isSuccessful = false;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(MainUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.PostAsync(SaveURI, ConvertParams(new SaveModel(model)));
                if (response.IsSuccessStatusCode)
                {
                    isSuccessful = true;
                }
            }

            return isSuccessful;
        }
    }
}