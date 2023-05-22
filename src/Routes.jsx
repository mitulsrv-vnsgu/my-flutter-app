import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AddProduct = React.lazy(() => import("pages/AddProduct"));
const CartProductList = React.lazy(() => import("pages/CartProductList"));
const ShopReviews = React.lazy(() => import("pages/ShopReviews"));
const ShopDetailitem = React.lazy(() => import("pages/ShopDetailitem"));
const ShopSearch = React.lazy(() => import("pages/ShopSearch"));
const ShippingInfo = React.lazy(() => import("pages/ShippingInfo"));
const CheckoutOne = React.lazy(() => import("pages/CheckoutOne"));
const EKYCIntroductionStepFour = React.lazy(() =>
  import("pages/EKYCIntroductionStepFour")
);
const EKYCIntroductionStepThree = React.lazy(() =>
  import("pages/EKYCIntroductionStepThree")
);
const EKYCSuccessful = React.lazy(() => import("pages/EKYCSuccessful"));
const EKYCSignature = React.lazy(() => import("pages/EKYCSignature"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const EKYCConfirmInformation = React.lazy(() =>
  import("pages/EKYCConfirmInformation")
);
const PaymentInfo = React.lazy(() => import("pages/PaymentInfo"));
const EKYCIntroductionStepTwo = React.lazy(() =>
  import("pages/EKYCIntroductionStepTwo")
);
const EKYCIntroductionStepOne = React.lazy(() =>
  import("pages/EKYCIntroductionStepOne")
);
const EKYCBegin = React.lazy(() => import("pages/EKYCBegin"));
const EKYCScanFace = React.lazy(() => import("pages/EKYCScanFace"));
const EKYCScanIDCardAddimage = React.lazy(() =>
  import("pages/EKYCScanIDCardAddimage")
);
const EKYCScanIDCard = React.lazy(() => import("pages/EKYCScanIDCard"));
const Settings = React.lazy(() => import("pages/Settings"));
const Conversation = React.lazy(() => import("pages/Conversation"));
const Tracktasks = React.lazy(() => import("pages/Tracktasks"));
const FileManagementDefault = React.lazy(() =>
  import("pages/FileManagementDefault")
);
const Customer = React.lazy(() => import("pages/Customer"));
const Profile = React.lazy(() => import("pages/Profile"));
const CalenderWeek = React.lazy(() => import("pages/CalenderWeek"));
const CalenderDay1Event = React.lazy(() => import("pages/CalenderDay1Event"));
const CalenderDayNoevent = React.lazy(() => import("pages/CalenderDayNoevent"));
const CalenderMonth = React.lazy(() => import("pages/CalenderMonth"));
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const SignupVerification = React.lazy(() => import("pages/SignupVerification"));
const SignupWrongemail = React.lazy(() => import("pages/SignupWrongemail"));
const SignupTextfill = React.lazy(() => import("pages/SignupTextfill"));
const SignupDefault = React.lazy(() => import("pages/SignupDefault"));
const SigninTextfill = React.lazy(() => import("pages/SigninTextfill"));
const SigninDefault = React.lazy(() => import("pages/SigninDefault"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signindefault" element={<SigninDefault />} />
          <Route path="/signintextfill" element={<SigninTextfill />} />
          <Route path="/signupdefault" element={<SignupDefault />} />
          <Route path="/signuptextfill" element={<SignupTextfill />} />
          <Route path="/signupwrongemail" element={<SignupWrongemail />} />
          <Route path="/signupverification" element={<SignupVerification />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route path="/calendermonth" element={<CalenderMonth />} />
          <Route path="/calenderdaynoevent" element={<CalenderDayNoevent />} />
          <Route path="/calenderday1event" element={<CalenderDay1Event />} />
          <Route path="/calenderweek" element={<CalenderWeek />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customer" element={<Customer />} />
          <Route
            path="/filemanagementdefault"
            element={<FileManagementDefault />}
          />
          <Route path="/tracktasks" element={<Tracktasks />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
          <Route
            path="/ekycscanidcardaddimage"
            element={<EKYCScanIDCardAddimage />}
          />
          <Route path="/ekycscanface" element={<EKYCScanFace />} />
          <Route path="/ekycbegin" element={<EKYCBegin />} />
          <Route
            path="/ekycintroductionstepone"
            element={<EKYCIntroductionStepOne />}
          />
          <Route
            path="/ekycintroductionsteptwo"
            element={<EKYCIntroductionStepTwo />}
          />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route
            path="/ekycconfirminformation"
            element={<EKYCConfirmInformation />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ekycsignature" element={<EKYCSignature />} />
          <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
          <Route
            path="/ekycintroductionstepthree"
            element={<EKYCIntroductionStepThree />}
          />
          <Route
            path="/ekycintroductionstepfour"
            element={<EKYCIntroductionStepFour />}
          />
          <Route path="/checkoutone" element={<CheckoutOne />} />
          <Route path="/shippinginfo" element={<ShippingInfo />} />
          <Route path="/shopsearch" element={<ShopSearch />} />
          <Route path="/shopdetailitem" element={<ShopDetailitem />} />
          <Route path="/shopreviews" element={<ShopReviews />} />
          <Route path="/cartproductlist" element={<CartProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
