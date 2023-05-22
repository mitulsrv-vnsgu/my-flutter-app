import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import '/core/app_export.dart';
import 'package:mitul_s_application176/presentation/search_topics_screen/models/search_topics_model.dart';
part 'search_topics_event.dart';
part 'search_topics_state.dart';

class SearchTopicsBloc extends Bloc<SearchTopicsEvent, SearchTopicsState> {
  SearchTopicsBloc(SearchTopicsState initialState) : super(initialState) {
    on<SearchTopicsInitialEvent>(_onInitialize);
  }

  _onInitialize(
    SearchTopicsInitialEvent event,
    Emitter<SearchTopicsState> emit,
  ) async {
    emit(state.copyWith(searchController: TextEditingController()));
  }
}
