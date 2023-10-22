const coupons = [{
    name:"October Offer",
    code: "XBQ-FGY",
    startDate:"2023-10-20",
    endDate:"2023-11-20",
    offerValue:200,
    discount:20,
    status:true

},
{
    name:"World children Day",
    code: "Children14",
    startDate:"2023-11-14",
    endDate:"2023-11-24",
    offerValue:200,
    discount:20,
    status:true

 

}]

const getAllCoupons = (req,res)=>{
    res.send({
        message:"Data Fetch Successful",
    coupons
})
}

const getCouponByid = (req,res)=>{
    const id = Number(req.params.id)
    if (id !== NaN && id<coupons.length){
        res.send({
            message:"Data Fetch Successful",
            coupons:coupons[id]
        })
    }
        else
        {
            res.send({
                message:"invalid Id"
            })
        }
    
}

const createCoupon = (req,res)=>{
    let data=req.body
    let filteredData = coupons.filter((e)=>e.code===data.code)
    if(filteredData.length===0)
    {
        coupons.push(data)
        res.status(201).send({
            message:"coupon created successful"
        })
    }
    else{
        res.status(400).send({
            message:"coupon already Exist"
        })
    }
}

const editCoupon = (req,res)=>{
    const id = Number(req.params.id)
    if(id !==NaN && id<coupons.length)
    {
        coupons.splice(id,1,req.body)
        res.status(201).send({
            message:"coupons Edited successful"
        })
    }
    else{
        res.status(400).send({
            message:"invalid ID"
        })
    }
}

const deleteCoupons = (req,res)=>{
    const id = Number(req.params.id)
    if(id !==nan && id<coupons.length){
        coupons.splice(id,1)
        res.status(400).send({
            message:"coupon Deleted Successful"
        })
    }

    else{
        res.status(400).send({
            message:"invalid Id"
        })
    }
}

 module.exports = {
    getAllCoupons,
    getCouponByid,
    createCoupon,
    editCoupon,
    deleteCoupons
}