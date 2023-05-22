import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import '/core/app_export.dart';
import 'package:mitul_s_application176/presentation/privacy_policy_screen/models/privacy_policy_model.dart';
part 'privacy_policy_event.dart';
part 'privacy_policy_state.dart';

class PrivacyPolicyBloc extends Bloc<PrivacyPolicyEvent, PrivacyPolicyState> {
  PrivacyPolicyBloc(PrivacyPolicyState initialState) : super(initialState) {
    on<PrivacyPolicyInitialEvent>(_onInitialize);
  }

  _onInitialize(
    PrivacyPolicyInitialEvent event,
    Emitter<PrivacyPolicyState> emit,
  ) async {}
}
