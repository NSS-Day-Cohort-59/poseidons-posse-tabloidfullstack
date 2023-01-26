using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Reflection.Metadata.Ecma335;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var categories = _categoryRepository.GetAll();
            return Ok(categories);
        }

        [HttpPost]
        public IActionResult Create(Category category)
        {
            try
            {
                if (!_categoryRepository.CheckIfExsists(category.Name))
                {
                    _categoryRepository.AddCategory(category);
                    return RedirectToAction("Index");

                }
                return Conflict("This category already exists"); 

            }
            catch (Exception ex)
            {
                return Ok(category);
            }

        }
    }
}
