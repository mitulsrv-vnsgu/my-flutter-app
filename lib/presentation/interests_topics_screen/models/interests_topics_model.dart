// ignore_for_file: must_be_immutable

import 'package:equatable/equatable.dart';
import 'interests_item_model.dart';

/// This class defines the variables used in the [interests_topics_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class InterestsTopicsModel extends Equatable {
  InterestsTopicsModel({this.interestsItemList = const []});

  List<InterestsItemModel> interestsItemList;

  InterestsTopicsModel copyWith({List<InterestsItemModel>? interestsItemList}) {
    return InterestsTopicsModel(
      interestsItemList: interestsItemList ?? this.interestsItemList,
    );
  }

  @override
  List<Object?> get props => [interestsItemList];
}
