import { NeedsModel } from './'

export class Needs {
    constructor() {

    }

    // All actions needs for service must became a method in module class and then use in Routes file
    // Attention!!! Nothing add to routes directly

    testAction(req, res, next) {
        res.send('hello I am a test')
    }
    
    getAllNeeds(req, res, next) {
        NeedsModel.find({}, (err, needs) => {
            if(err)  return res.status(500).json({message: 'مشکلی در سیستم وجود دارد.'})
            const publicNeeds = needs.map(({_id, rescur, location, needs}) => {
                return {_id, rescur, location, needs}
            })
            return res.status(201).json(publicNeeds)
        })
    }

    postNewNeed(req, res, next) {
        const { name, title, lat, lng, needs } = req.body
        console.log(req.body)
        if (!name || !title || !lat || !lng || !needs) {
            return res.status(400).json({message: 'پر کردن تمام فیلد ها اجباری است.'})
        } 
        const rescur = { name, title }
        const location = { lat, lng }
        return NeedsModel.create({
            rescur, location, needs
        }, (err, need) => {
            if(err)  return res.status(500).json({message: 'مشکلی در سیستم وجود دارد.'})
            return res.status(200).json({message: 'نیاز مشخص شده با موفقیت ثبت شد.'})
        })
    }
}

export const needsInstance = new Needs()