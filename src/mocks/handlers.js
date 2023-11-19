import { rest } from "msw";

const baseURL = "https://snapdish-backend-eb95a816e88d.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json(
            {
                "pk": 5,
                "username": "Sharj14",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 5,
                "profile_image": "https://res.cloudinary.com/dhfp7asfd/image/upload/v1/media/images/AvatarMaker_bwvin7"
            }
        ));
    }),
    rest.post(`${baseURL}dj-resty-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];
