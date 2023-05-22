import 'bloc/drawer_menu_bloc.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application176/core/app_export.dart';

class DrawerMenuDraweritem extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: Container(
            width: getHorizontalSize(287),
            padding: getPadding(left: 27, top: 29, right: 27, bottom: 29),
            decoration: AppDecoration.fillWhiteA700,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Padding(
                      padding: getPadding(left: 1, top: 13),
                      child: Row(children: [
                        CustomImageView(
                            imagePath: ImageConstant.imgProfilepicture,
                            height: getVerticalSize(62),
                            width: getHorizontalSize(59)),
                        Padding(
                            padding: getPadding(left: 16, top: 5, bottom: 7),
                            child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text("lbl_welcome".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style: AppStyle
                                          .txtPoppinsRegular14Gray40001),
                                  Padding(
                                      padding: getPadding(top: 2),
                                      child: Text("lbl_john_doe".tr,
                                          overflow: TextOverflow.ellipsis,
                                          textAlign: TextAlign.left,
                                          style: AppStyle.txtPoppinsMedium18))
                                ]))
                      ])),
                  Padding(
                      padding: getPadding(top: 34),
                      child: Divider(
                          height: getVerticalSize(1),
                          thickness: getVerticalSize(1),
                          color: ColorConstant.black90067,
                          indent: getHorizontalSize(1))),
                  GestureDetector(
                      onTap: () {
                        onTapTxtHome(context);
                      },
                      child: Padding(
                          padding: getPadding(left: 1, top: 67),
                          child: Text("lbl_home".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium18))),
                  GestureDetector(
                      onTap: () {
                        onTapTxtAudio(context);
                      },
                      child: Padding(
                          padding: getPadding(left: 1, top: 28),
                          child: Text("lbl_explore".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium18))),
                  GestureDetector(
                      onTap: () {
                        onTapTxtReadinglist(context);
                      },
                      child: Padding(
                          padding: getPadding(left: 1, top: 24),
                          child: Text("lbl_interests".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium18))),
                  GestureDetector(
                      onTap: () {
                        onTapTxtTermandconditio(context);
                      },
                      child: Padding(
                          padding: getPadding(left: 1, top: 25),
                          child: Text("msg_terms_and_condi2".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium18))),
                  GestureDetector(
                      onTap: () {
                        onTapTxtNewstory(context);
                      },
                      child: Padding(
                          padding: getPadding(left: 1, top: 28),
                          child: Text("lbl_privacy_policy2".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium18))),
                  Spacer(),
                  Divider(
                      height: getVerticalSize(1),
                      thickness: getVerticalSize(1),
                      color: ColorConstant.black90067,
                      indent: getHorizontalSize(1)),
                  Padding(
                      padding: getPadding(left: 2, top: 24),
                      child: Text("lbl_logout".tr,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.left,
                          style: AppStyle.txtPoppinsMedium18Black900))
                ])));
  }

  onTapTxtHome(BuildContext context) {
    NavigatorService.pushNamed(
      AppRoutes.homeScreen,
    );
  }

  onTapTxtAudio(BuildContext context) {
    NavigatorService.pushNamed(
      AppRoutes.exploreScreen,
    );
  }

  onTapTxtReadinglist(BuildContext context) {
    NavigatorService.pushNamed(
      AppRoutes.interestsTopicsScreen,
    );
  }

  onTapTxtTermandconditio(BuildContext context) {
    NavigatorService.pushNamed(
      AppRoutes.termsAndConditionsScreen,
    );
  }

  onTapTxtNewstory(BuildContext context) {
    NavigatorService.pushNamed(
      AppRoutes.privacyPolicyScreen,
    );
  }
}
