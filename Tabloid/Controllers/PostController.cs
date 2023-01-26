﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        private readonly IUserProfileRepository _userProfileRepository;

        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
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


        [HttpPost]
        public IActionResult Post(Post post)
        { 
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
             _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        
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







       /* private UserProfile GetCurrentUserProfile()
        {
            
        }*/



    }
}
