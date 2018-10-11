import axios from 'axios';
import { Dispatch } from 'redux';
import { updateApplicantsData } from '../applicants/actionCreator';
import { GET_APPLICANT_DATA, CHECK_PAYMENT, CEHCK_RECEIPT } from './action';

export const getApplicantData = (jwt: string, userId: string) => async (dispatch: Dispatch<GetApplicantDataAction|CheckApplicantAction>) => {
  if (userId === '') {
    dispatch({
      type: GET_APPLICANT_DATA,
      applicantData: {
        academic: {
          graduate_year: 0,
          is_ged: false,
          school_name: '',
          student_class: 0,
          student_grade: 0,
          student_number: 0
        },
        basic: {
          address: '',
          name: '',
          tel: ''
        },
        exam_code: '',
        main: {
          admission: '',
          img_path: '',
          name: '',
          region: ''
        },
        parent: {
          name: '',
          tel: ''
        }
      }
    });
  } else {
    try {
      const response = await axios.get(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/information/${userId}`, {
        headers: {
          Authorization: jwt
        }
      });
      const applicantData: ApplicantInfo = response.data;
      dispatch({
        type: GET_APPLICANT_DATA,
        applicantData
      });
    } catch (err) {
      console.log(err);
    }
  }
}
export const checkPayment = (jwt: string, userId: string) => async (dispatch: Dispatch<any>) => {
  try {
    await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/payment/${userId}`, null, {
      headers: {
        Authorization: jwt
      }
    });
    dispatch(updateApplicantsData(jwt, ''));
    dispatch({
      type: CHECK_PAYMENT,
      userId
    });
  } catch (err) {
    console.log(err);
  }
}
export const checkReceipt = (jwt: string, userId: string) => async (dispatch: any) => {
  try {
    await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/receipt/${userId}`, null, {
      headers: {
        Authorization: jwt
      }
    });
    dispatch(updateApplicantsData(jwt, ''));
    dispatch({
      type: CEHCK_RECEIPT,
      userId
    });
  } catch (err) {
    console.log(err);
  }
}