import { CampModel } from './'

export class Camps {
    getAllDistribution(req, res, next) {
        CampModel.find({}, (err, camps) => {
            if(err)  return res.status(500).json({message: 'مشکلی در سیستم وجود دارد.'})
            const publicCamps = camps.map(({_id, location}) => {
                return {_id, location}
            })
            return res.status(201).json(publicCamps)
        })
    }

    postNewCamp(req, res, next) {
        const { lat, long } = req.body
        if (!lat || !long) {
            return res.status(400).json({message: 'پر کردن تمام فیلد ها اجباری است.'})
        } 
        const location = { lat, long }
        return CampModel.create({
            location
        }, (err, need) => {
            if(err)  return res.status(500).json({message: 'مشکلی در سیستم وجود دارد.'})
            return res.status(200).json({message: 'کمپ مشخص شده با موفقیت ثبت شد.'})
        })
    }
}

export const campsInstance = new Camps()