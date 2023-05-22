import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import '/core/app_export.dart';
import '../models/interests_item_model.dart';
import 'package:mitul_s_application176/presentation/interests_topics_screen/models/interests_topics_model.dart';
part 'interests_topics_event.dart';
part 'interests_topics_state.dart';

class InterestsTopicsBloc
    extends Bloc<InterestsTopicsEvent, InterestsTopicsState> {
  InterestsTopicsBloc(InterestsTopicsState initialState) : super(initialState) {
    on<InterestsTopicsInitialEvent>(_onInitialize);
  }

  _onInitialize(
    InterestsTopicsInitialEvent event,
    Emitter<InterestsTopicsState> emit,
  ) async {
    emit(state.copyWith(
        interestsTopicsModelObj: state.interestsTopicsModelObj?.copyWith(
      interestsItemList: fillInterestsItemList(),
    )));
  }

  List<InterestsItemModel> fillInterestsItemList() {
    return List.generate(9, (index) => InterestsItemModel());
  }
}
