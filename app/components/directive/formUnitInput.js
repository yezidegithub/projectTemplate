/**
 * Created by Yjs on 2018/1/3.
 */
angular.module('frontierApp')
  .directive('formUnitInput', [function () {
    return {
      restrict: 'E',
      scope: {
        label: '@',
        placeholder: '@',
        inputModel: '='
      },
      templateUrl: '../manage/modules/templates/formUnitInput.html'
    };
  }]);
