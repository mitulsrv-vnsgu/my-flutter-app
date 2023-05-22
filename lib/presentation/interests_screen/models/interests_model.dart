// ignore_for_file: must_be_immutable

import 'package:equatable/equatable.dart';
import 'chipviewart_item_model.dart';

/// This class defines the variables used in the [interests_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class InterestsModel extends Equatable {
  InterestsModel({this.chipviewartItemList = const []});

  List<ChipviewartItemModel> chipviewartItemList;

  InterestsModel copyWith({List<ChipviewartItemModel>? chipviewartItemList}) {
    return InterestsModel(
      chipviewartItemList: chipviewartItemList ?? this.chipviewartItemList,
    );
  }

  @override
  List<Object?> get props => [chipviewartItemList];
}
