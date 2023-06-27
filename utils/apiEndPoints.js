module.exports = {
    endpoints: [
        {
            method: "GET",
            path: "/api/v1/questions/",
            description: "Get All questions."
        },
        {
            method: "GET",
            path: "/api/v1/questions/:id",
            description: "Get question."
        },
        {
            method: "DELETE",
            path: "/api/v1/questions/:id",
            description: "Delete question."
        },
        {
            method: "POST",
            path: "/api/v1/questions/:id/options/create",
            description: "Create Options."
        },
        {
            method: "POST",
            path: "/api/v1/questions/create",
            description: "Create question."
        },
        {
            method: "DELETE",
            path: "/api/v1/options/:id/delete",
            description: "Delete Option."
        },
        {
            method: "PATCH",
            path: "/api/v1/options/:id/add_vote",
            description: "Vote the option."
        }
    ]
};
