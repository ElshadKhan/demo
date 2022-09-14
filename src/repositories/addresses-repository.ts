import {Request, Response, Router} from "express";

const addresses = [{id: 1, value: 'Nezalejnasti 12'},{id: 2, value: 'Selickaga 11'}]

export const addressesRepository = {
    findAddresses() {return addresses},
    findAddressById(id: number) {
        let address = addresses.find(p => p.id === id);
        return address
    }
}

