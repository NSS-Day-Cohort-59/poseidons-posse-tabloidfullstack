using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase 
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAllPublishedPosts());
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            var post = _postRepository.GetPostById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("comments/{id}")]

        public IActionResult GetComments(int id)
        {
            var post = _postRepository.GetCommentsByPostId(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost("comment")]
        public IActionResult Post(Comment comment)
        {


            comment.CreateDateTime = DateTime.Now;
           

            _postRepository.AddComment(comment);

            return Ok(comment);
        }



        [HttpGet("myPosts/{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userPosts = _postRepository.GetAllPostsByUser(firebaseUserId);
            if (userPosts == null)
            {
                return NotFound();
            }
            return Ok(userPosts);
        }










    }
}
