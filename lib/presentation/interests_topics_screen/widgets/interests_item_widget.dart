import '../models/interests_item_model.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application176/core/app_export.dart';
import 'package:mitul_s_application176/widgets/custom_button.dart';

// ignore: must_be_immutable
class InterestsItemWidget extends StatelessWidget {
  InterestsItemWidget(this.interestsItemModelObj);

  InterestsItemModel interestsItemModelObj;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CustomImageView(
            imagePath: ImageConstant.imgBlogthumbnail80x80,
            height: getSize(
              40,
            ),
            width: getSize(
              40,
            ),
            radius: BorderRadius.circular(
              getHorizontalSize(
                5,
              ),
            ),
          ),
          Padding(
            padding: getPadding(
              left: 17,
              top: 9,
              bottom: 9,
            ),
            child: Text(
              interestsItemModelObj.typeTxt,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtPoppinsRegular14Gray900,
            ),
          ),
          Spacer(),
          CustomButton(
            height: getVerticalSize(
              32,
            ),
            width: getHorizontalSize(
              87,
            ),
            text: "lbl_follow".tr,
            margin: getMargin(
              top: 4,
              bottom: 4,
            ),
          ),
        ],
      ),
    );
  }
}
