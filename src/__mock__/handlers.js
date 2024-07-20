import { http, HttpResponse } from 'msw'
 
export const handlers = [
    http.put('/carts/:id', async ({ cartForChange }) => {

        const newCart = await cartForChange.json()

        return HttpResponse.json(newCart)
      }),
]