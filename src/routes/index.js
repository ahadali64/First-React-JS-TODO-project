import { authorRoutes } from "./route-list/author-route"
import { publicRoutes } from "./route-list/public-routes"

export const useRoutes = () =>{
    return [...publicRoutes, ...authorRoutes]
}