CHANGELOG
=========

## 0.2.3 (unreleased)

## 0.2.2 (2017-09-06, beta release)

#### fixes:
 - fixed issue while importing in ES6 environment

## 0.2.1 (2017-03-16, beta release)

#### updates:
 - reverted back to v0.1.1 in terms of functionality
 - updated function declaration parts to run in strict mode without error in Safari

## 0.2.0 (2017-03-16, beta release)

#### features:
 - Changed parameters to QuietWheel(condition, callbackQWE, callbackOWE)
		condition   -- if true callbackQWE runs. if false callbackOWE runs.
		callbackQWE -- callback for QuietWheelEvents
		callbackOWE -- callback for OriginalWheelEvents

 - WARNING: broken backward compatibility

## 0.1.1 (2017-03-02, beta release)

#### features:
 - enableScrollEvents parameter can accept either boolean or function. If function, it applies the return value as the parameter.

#### updates:
 - QWEventUnit(e) contains originalWheelEvent, scala, direction, and isVerticalScroll

## 0.1.0 (2017-03-01, beta release)

#### features:
 - Callback function to be called only once when wheeled.

#### updates:

#### fixes:
