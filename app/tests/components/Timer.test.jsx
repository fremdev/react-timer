var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('../../components/Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {

    it('should start count on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.countStatus).toBe('started');
        done();
      }, 1001);
    });

    it('should pause count on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(1);
        expect(timer.state.countStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        done();
      }, 1001);
    });
  });
});
