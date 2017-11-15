import { NeedsModel } from './'

export class Needs {
    constructor() {

    }

    // All actions needs for service must became a method in module class and then use in Routes file
    // Attention!!! Nothing add to routes directly

    testAction(req, res, next) {
        res.send('hello I am a test')
    }
    
}

export const needsInstance = new Needs()