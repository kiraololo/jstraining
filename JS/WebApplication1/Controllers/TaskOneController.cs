using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class TaskOneController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
