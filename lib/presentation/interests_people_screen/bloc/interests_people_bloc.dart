import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import '/core/app_export.dart';
import '../models/interests1_item_model.dart';
import 'package:mitul_s_application176/presentation/interests_people_screen/models/interests_people_model.dart';
part 'interests_people_event.dart';
part 'interests_people_state.dart';

class InterestsPeopleBloc
    extends Bloc<InterestsPeopleEvent, InterestsPeopleState> {
  InterestsPeopleBloc(InterestsPeopleState initialState) : super(initialState) {
    on<InterestsPeopleInitialEvent>(_onInitialize);
  }

  _onInitialize(
    InterestsPeopleInitialEvent event,
    Emitter<InterestsPeopleState> emit,
  ) async {
    emit(state.copyWith(
        interestsPeopleModelObj: state.interestsPeopleModelObj?.copyWith(
      interests1ItemList: fillInterests1ItemList(),
    )));
  }

  List<Interests1ItemModel> fillInterests1ItemList() {
    return List.generate(5, (index) => Interests1ItemModel());
  }
}
