using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
<<<<<<< HEAD
        private readonly IUserProfileRepository _profileRepository;

        public PostController(IPostRepository postRepository, IUserProfileRepository profileRepository)
        {
            _postRepository = postRepository;
            _profileRepository = profileRepository;
=======
        private readonly IUserProfileRepository _userProfileRepository;

        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
>>>>>>> fe32a898932d8948d6c2633747209eed5f9c7635
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



        [HttpPost("add")]
        public IActionResult Post(Post post)
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var user = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);

            post.IsApproved = true;
            post.UserProfileId = user.Id;
            post.CreateDateTime = DateTime.Now;

            _postRepository.Add(post);

            return CreatedAtAction("Get", new { id = post.Id }, post);
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


        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {

            if (id != post.Id)
            {
                return BadRequest();
            }
           
            _postRepository.UpdatePost(post);
            return Ok(post);
        }




        /* private UserProfile GetCurrentUserProfile()
         {

         }*/



    }
}
