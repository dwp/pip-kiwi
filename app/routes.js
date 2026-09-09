//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/daily-living-qualifying-period-answer', function (req, res) {

  const answer = req.session.data['dailyLivingQualifyingPeriod']

  if (answer === 'yes') {
    return res.redirect('/v1/pips/qppts-daily-living-q2')
  }

  return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')
})

router.post('/daily-living-nine-months-answer', function (req, res) {

  const answer = req.session.data['dailyLivingForNineMonths']

  return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')

})

router.post('/mobility-qualifying-period-answer', function (req, res) {

  const answer = req.session.data['mobilityQualifyingPeriod']

  if (answer === 'yes') {
    return res.redirect('/v1/pips/qppts-mobility-q2')
  }

  return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')

})

router.post('/mobility-nine-months-answer', function (req, res) {

  return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')

})

router.post('/payability-q1-answer', function (request, response) {

  var hospitalStay = request.session.data['hospital-stay']

  if (hospitalStay == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['hospitalStayStatus'] = 'Done'

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  }

})

router.post('/payability-q2-answer', function (request, response) {

  var careHome = request.session.data['care-home']

  if (careHome == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['careHomeStatus'] = 'Done'

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  }

})

router.post('/payability-q3-answer', function (request, response) {

  var nursingHome = request.session.data['nursing-home']

  if (nursingHome == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['nursingHomeStatus'] = 'Done'

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  }

})


router.post('/payability-q4-answer', function (request, response) {

  var rescolStay = request.session.data['rescol-stay']

  if (rescolStay == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['rescolStayStatus'] = 'Done'

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  }

})

router.post('/payability-q5-answer', function (request, response) {

  var prisonStay = request.session.data['prison-stay']

  if (prisonStay == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist-full')

  } else {

    request.session.data['prisonStayStatus'] = 'Done'

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist-full')

  }

})


router.post('/task-on-hold-gateway', function (request, response) {

  var answer = request.session.data['signIn']

  if (answer == 'yes') {
    response.redirect('/v1/dwp-task/dwp-agent-dashboard-1')
  } else {
    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')
  }

})

router.post('/task-on-hold-gateway2', function (request, response) {

  var answer = request.session.data['signIn']

  if (answer == 'yes') {
    response.redirect('/v1/dwp-task/dwp-agent-dashboard-2')
  } else {
    response.redirect('/v1/make-a-decision/make-a-decision-tasklist-full')
  }

})

router.post('/v1/activity-descriptors/preparing-food', function (req, res) {
  res.redirect('/v1/activity-descriptors/preparing-food-reason')
})

router.post('/v1/activity-descriptors/preparing-food-reason', function (req, res) {

  req.session.data.preparingFoodStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/taking-nutrition', function (req, res) {
  res.redirect('/v1/activity-descriptors/taking-nutrition-reason')
})

router.post('/v1/activity-descriptors/taking-nutrition-reason', function (req, res) {

  req.session.data.takingNutritionStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full')

})

router.post('/v1/activity-descriptors/managing-therapy', function (req, res) {
  res.redirect('/v1/activity-descriptors/managing-therapy-reason')
})

router.post('/v1/activity-descriptors/managing-therapy-reason', function (req, res) {

  req.session.data.managingTherapyStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full')

})

router.post('/v1/activity-descriptors/washing-and-bathing', function (req, res) {
  res.redirect('/v1/activity-descriptors/washing-and-bathing-reason')
})

router.post('/v1/activity-descriptors/washing-and-bathing-reason', function (req, res) {

  req.session.data.washingBathingStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/toilet-needs', function (req, res) {
  res.redirect('/v1/activity-descriptors/toilet-needs-reason')
})

router.post('/v1/activity-descriptors/toilet-needs-reason', function (req, res) {

  req.session.data.toiletNeedsStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/dressing-undressing', function (req, res) {
  res.redirect('/v1/activity-descriptors/dressing-undressing-reason')
})

router.post('/v1/activity-descriptors/dressing-undressing-reason', function (req, res) {

  req.session.data.dressingUndressingStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/communicate-verbally', function (req, res) {
  res.redirect('/v1/activity-descriptors/communicate-verbally-reason')
})

router.post('/v1/activity-descriptors/communicate-verbally-reason', function (req, res) {

  req.session.data.communicateVerballyStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/read-understand', function (req, res) {
  res.redirect('/v1/activity-descriptors/read-understand-reason')
})

router.post('/v1/activity-descriptors/read-understand-reason', function (req, res) {

  req.session.data.readUnderstandStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/engaging-others', function (req, res) {
  res.redirect('/v1/activity-descriptors/engaging-others-reason')
})

router.post('/v1/activity-descriptors/engaging-others-reason', function (req, res) {

  req.session.data.engagingOthersStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/budget-decisions', function (req, res) {
  res.redirect('/v1/activity-descriptors/budget-decisions-reason')
})

router.post('/v1/activity-descriptors/budget-decisions-reason', function (req, res) {

  req.session.data.budgetDecisionsStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/mobility/planning-journeys', function (req, res) {
  res.redirect('/v1/activity-descriptors/mobility/planning-journeys-reason')
})

router.post('/v1/activity-descriptors/mobility/planning-journeys-reason', function (req, res) {

  req.session.data.planningJourneysStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/activity-descriptors/mobility/moving-around', function (req, res) {
  res.redirect('/v1/activity-descriptors/mobility/moving-around-reason')
})

router.post('/v1/activity-descriptors/mobility/moving-around-reason', function (req, res) {

  req.session.data.movingAroundStatus = 'Done'

  res.redirect('/v1/make-a-decision/make-a-decision-tasklist-full.html')

})

router.post('/v1/move-to-pipcs/move-to-pipcs', function (req, res) {

  const action = req.session.data.signIn

  if (action === 'make-decision') {
    res.redirect('/v1/make-a-decision/make-a-decision-tasklist')
  } else if (action === 'move-pipcs') {
    res.redirect('/v1/move-to-pipcs/end-of-journey-1')
  }

})

router.post('/v1/about-your-health/rds-picker', function (req, res) {
  res.redirect('/v1/about-your-health/rds-picker-option-selected')
})

router.post('/v1/about-your-health/rds-picker-manual-entry', function (req, res) {
  res.redirect('/v1/about-your-health/rds-picker-option-selected')
})

router.post('/v1/make-a-decision/standard-three-yr-award-q', function (req, res) {

  const answer = req.session.data.whereDoYouLive

  if (answer === 'no') {
    res.redirect('/v1/make-a-decision/award-review-period')
  } else {
    res.redirect('/v1/make-a-decision/select-award-review-period')
  }

})

router.post('/v1/make-a-decision/award-review-period', function (req, res) {
  res.redirect('/v1/make-a-decision/justifications')
})

router.post('/v1/make-a-decision/justifications', function (req, res) {
  res.redirect('/v1/form-letter/form-decision-letter')
})