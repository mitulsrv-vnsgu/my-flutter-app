// ignore_for_file: must_be_immutable

import 'package:equatable/equatable.dart';
import 'interests1_item_model.dart';

/// This class defines the variables used in the [interests_people_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class InterestsPeopleModel extends Equatable {
  InterestsPeopleModel({this.interests1ItemList = const []});

  List<Interests1ItemModel> interests1ItemList;

  InterestsPeopleModel copyWith(
      {List<Interests1ItemModel>? interests1ItemList}) {
    return InterestsPeopleModel(
      interests1ItemList: interests1ItemList ?? this.interests1ItemList,
    );
  }

  @override
  List<Object?> get props => [interests1ItemList];
}
