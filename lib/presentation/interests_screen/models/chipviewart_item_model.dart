// ignore_for_file: must_be_immutable

import 'package:equatable/equatable.dart';

/// This class is used in the [chipviewart_item_widget] screen.
class ChipviewartItemModel extends Equatable {
  ChipviewartItemModel({
    this.artTxt = "Art",
    this.isSelected = false,
  });

  String artTxt;

  bool isSelected;

  ChipviewartItemModel copyWith({
    String? artTxt,
    bool? isSelected,
  }) {
    return ChipviewartItemModel(
      artTxt: artTxt ?? this.artTxt,
      isSelected: isSelected ?? this.isSelected,
    );
  }

  @override
  List<Object?> get props => [artTxt, isSelected];
}
