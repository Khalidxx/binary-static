/**
 * The purpose of this file is to store static strings of 'app', 'static' sections which are not passed in any localize() call
 * i.e. those API strings that are not translated, so we handle their translation process here
 *
 * NOTE: Doesn't need to put a string here if it is the first argument in a localize() call
 */
module.exports = [
    // -----------------------------
    // Commented translation strings
    // -----------------------------
    'All markets are closed now. Please try again later.',

    // ---------------------------------------------
    // API strings ignored by autogenerated localize
    // ---------------------------------------------
    // NOTE: although some of these strings already exist in extracted_strings_app.js,
    // we keep all the API strings that need translation here, to make sure that we won't miss them in case they are removed from js code

    // action_type from statement
    'Buy',
    'Deposit',
    'Sell',
    'Withdrawal',

    // longcode from statement
    'Virtual money credit to account',

    // market_specific[market][submarket].name from get_limits
    'Commodities',
    'Indices',
    'Major Pairs',
    'Minor Pairs',
    'Smart FX',
    'Volatility Indices',

    // action from login_history
    'login',
    'logout',

    // contract_category from contracts_for
    'Asians',
    'Call Spread/Put Spread',
    'Digits',
    'Ends Between/Ends Outside',
    'Even/Odd',
    'High/Low Ticks',
    'Higher/Lower',
    'In/Out',
    'Lookbacks',
    'Matches/Differs',
    'Over/Under',
    'Reset Call/Reset Put',
    'Rise/Fall',
    'Stays Between/Goes Outside',
    'Touch/No Touch',
    'Up/Down',

    // events[descrip] and events[dates] from trading_times
    'Christmas Day',
    'Closes early (at 18:00)',
    'Closes early (at 21:00)',
    'Fridays',
    'New Year\'s Day',
    'today',
    'today, Fridays',

    // error messages
    'There was a problem accessing the server.',
    'There was a problem accessing the server during purchase.',
];
