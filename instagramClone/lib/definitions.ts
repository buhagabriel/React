import type{
    Comment,
    Follows,
    Like,
    Post,
    SavedPost,
    User,
}from "@prisma/client";

export type CommentWithExtras = Comment & {user:User};
export type LikeWithWxtras = Like & {user:User};

export type PostWithExtras = Post & {
    comments:CommentWithExtras[];
    likes:LikeWithWxtras[];
    savedBy:SavedPost[];
    user:User;
}
export type UserWithFollows = User & {
    following: Follows[];
    followedBy: Follows[];
  };
  
  export type FollowerWithExtras = Follows & { follower: UserWithFollows };
  export type FollowingWithExtras = Follows & { following: UserWithFollows };

export type UserWithExtras = User & {
    posts: Post[];
    saved: SavedPost[];
    followedBy: FollowerWithExtras[];
    following: FollowingWithExtras[];
  };