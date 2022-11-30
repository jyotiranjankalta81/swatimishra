import { uuid } from 'uuidv4';
import { Request } from 'express'
import { ContactusInstance } from '../model/contactus';
import { OrderInstance } from '../model/order.model';
import { randomgenrator } from '../utils/randomnumber';
import { OrderextenseInstance } from '../model/orderextense.model';
import { sendMail } from '../utils/sendMail';





class mainServiceClass {



    create_contactus = async (req: Request) => {
        const result = await ContactusInstance.create(
            {
                FULLNAME: req.body.FULLNAME,
                EMAIL: req.body.EMAIL,
                SUBJECT: req.body.SUBJECT,
                TRACKINGID: req.body.TRACKINGID,
                MESSAGE: req.body.MESSAGE,
            }
        )
        return result

    }

    create_order = async (req: Request, header: any) => {
        const result = await OrderInstance.create(
            {
                ORDER_TYPE: req.body.ORDER_TYPE,
                F_NAME: req.body.F_NAME,
                L_NAME: req.body.L_NAME,
                DOB: req.body.DOB,
                VISA_APP_NO: req.body.VISA_APP_NO,
                EMAIL: req.body.EMAIL,
                PATNER_TYPE: req.body.PATNER_TYPE,
                SUPPOSE_F_NAME: req.body.SUPPOSE_F_NAME,
                SUPPOSE_L_NAME: req.body.SUPPOSE_L_NAME,
                SUPPOSE_DOB: req.body.SUPPOSE_DOB,
                UCI_NUMBER: req.body.UCI_NUMBER,
                ATIP: req.body.ATIP,
                HEAR_CMT: req.body.HEAR_CMT,
                APPLIED_BY: header.sub,
            }
        )
        return result
    }


    create_order_extense = async (req: Request, order1: any) => {
        const randomnumber: string = randomgenrator(7)


        const result = await OrderextenseInstance.create(
            {
                ORDER_ID: order1.dataValues.ORDER_ID,
                NORMAL_ID: randomnumber,
                SPECIAL_ID: null,
                DOCUMENT_STATUS: false,
                DOCUMENTS: null,
                PAYMENT_TYPE: req.body.PAYMENT_TYPE,
                PAYMENT_ID: req.body.PAYMENT_ID,
                NOTES_APPLIEDON: null,
                NOTES_APPLIEDBY: null,
                COMPLETION_DATE: null,
                COMPLETED_BY: null,
            }
        )
        return result
    }
    send_mail = async (req: Request) => {
        const nodemail = await sendMail("vaibhavpandey373@gmail.com", "consentlatter", "this is dummy text");
        return nodemail
        // if (nodemail.status) {
        //     return res.status(httpStatus.CREATED).send({ success: true, message: "plan created successfully", data: createbasicplan });
        // }
    }

}



export const mainService = new mainServiceClass()