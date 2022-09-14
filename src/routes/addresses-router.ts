import {Request, Response, Router} from "express";
import {addressesRepository} from "../repositories/addresses-repository";

const addresses = [{id: 1, value: 'Nezalejnasti 12'},{id: 2, value: 'Selickaga 11'}]

export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
    const addresses = addressesRepository.findAddresses()
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const address = addressesRepository.findAddressById(+req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})