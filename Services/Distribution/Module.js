import { DisModel } from './'

export class Distribution {
    getAllDistribution(req, res, next) {
        DisModel.find({}, (err, dis) => {
            if(err)  return res.status(500).json({message: 'مشکلی در سیستم وجود دارد.'})
            const publicDis = dis.map(({_id, rescur, location, goods}) => {
                return {_id, rescur, location, goods}
            })
            return res.status(201).json(publicDis)
        })
    }

    postNewDis(req, res, next) {
        const { name, title, lat, long, goods } = req.body
        console.log(req.body)
        if (!name || !title || !lat || !long || !goods) {
            return res.status(400).json({message: 'پر کردن تمام فیلد ها اجباری است.'})
        } 
        const rescur = { name, title }
        const location = { lat, long }
        return DisModel.create({
            rescur, location, goods
        }, (err, need) => {
            if(err)  return res.status(500).json({message: 'مشکلی در سیستم وجود دارد.'})
            return res.status(200).json({message: 'نیاز مشخص شده با موفقیت ثبت شد.'})
        })
    }
}

export const distributionInstance = new Distribution()