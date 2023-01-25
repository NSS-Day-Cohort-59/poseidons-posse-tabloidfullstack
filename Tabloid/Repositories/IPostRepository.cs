using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllPublishedPosts();
        List<Post> GetAllPostsByUser(string userProfileId);
        List<Post> PostsByCategory(int catId);
        List<Post> PostsByTag(int tagId);


        Post GetPostById(int id);
        Post GetUserPostById(int id, int userProfileId);
        void Add(Post post);
        void Delete(Post post);
        void UpdatePost(Post post);

        //Need to create PostTag Class
        //void AddPostTag(PostTag postTag);
        void DeletePostTagsonPost(int id);
    }
}
