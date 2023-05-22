// ignore_for_file: must_be_immutable

part of 'explore_bloc.dart';

class ExploreState extends Equatable {
  ExploreState({
    this.searchoneController,
    this.exploreModelObj,
  });

  TextEditingController? searchoneController;

  ExploreModel? exploreModelObj;

  @override
  List<Object?> get props => [
        searchoneController,
        exploreModelObj,
      ];
  ExploreState copyWith({
    TextEditingController? searchoneController,
    ExploreModel? exploreModelObj,
  }) {
    return ExploreState(
      searchoneController: searchoneController ?? this.searchoneController,
      exploreModelObj: exploreModelObj ?? this.exploreModelObj,
    );
  }
}
