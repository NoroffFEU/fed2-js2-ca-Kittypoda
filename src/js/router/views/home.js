import { authGuard } from "../../utilities/authGuard";

authGuard();

import { readPosts } from "../../api/post/read";

readPosts();