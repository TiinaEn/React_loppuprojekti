// Register a User with the Application

AWSCognito.config.region = 'eu-west-1'; //This is required to derive the endpoint

var poolData = { UserPoolId : 'eu-west-1_acxXq42Jw',
    ClientId : '15j8f0cdngfhpk65904puq4pqj'
};
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

var attributeList = [];

var dataEmail = {
    Name : 'email',
    Value : 'email@mydomain.com'
};
// var dataPhoneNumber = {
//     Name : 'phone_number',
//     Value : '055555555555'
//};
var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
//var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);

attributeList.push(attributeEmail);
//attributeList.push(attributePhoneNumber);

userPool.signUp('username', 'password', attributeList, null, function(err, result){
    if (err) {
        alert(err);
        return;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});


//Delete an Authenticated User

cognitoUser.deleteUser(function(err, result) {
    if (err) {
        alert(err);
        return;
    }
    console.log('call result: ' + result);
});

//Retrieve the current user from local storage

var data = { UserPoolId : 'eu-west-1_acxXq42Jw',
    ClientId : '15j8f0cdngfhpk65904puq4pqj'
};
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(data);
var cognitoUser = userPool.getCurrentUser();

if (cognitoUser != null) {
    cognitoUser.getSession(function(err, session) {
        if (err) {
            alert(err);
            return;
        }
        console.log('session validity: ' + session.isValid());
    });
}

//Authenticate a User

var authenticationData = {
    Username : 'username',
    Password : 'password',
};
var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
var poolData = { UserPoolId : 'eu-west-1_acxXq42Jw',
    ClientId : '15j8f0cdngfhpk65904puq4pqj'
};
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
var userData = {
    Username : 'username',
    Pool : userPool
};
var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
        /*Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
        console.log('idToken + ' + result.idToken.jwtToken);
    },

    onFailure: function(err) {
        alert(err);
    },

});

//Enable MFA for a User Pool

cognitoUser.enableMFA(function(err, result) {
    if (err) {
        alert(err);
        return;
    }
    console.log('call result: ' + result);
});

//Create a User Pool Object

var data = { UserPoolId : 'eu-west-1_acxXq42Jw',
    ClientId : '15j8f0cdngfhpk65904puq4pqj'
};

var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(data);

// Sign Up For the Application

var attribute = {
    Name : 'email',
    Value : 'email@mydomain.com'
};

var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(attribute);
var attributeList = [];

attributeList.push(attributeEmail);
var cognitoUser;

userPool.signUp('username', 'password', attributeList, null, function(err, result) {
    if (err) {
        alert(err);
        return;
    }
    cognitoUser = result.user;
});

//Sign in With MFA Enabled

var userData = {
    Username : 'username',
    Pool : userPool
};

cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

var authenticationData = {
    Username : 'username',
    Password : 'password',
};

var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        alert('authentication successful!')
    },

    onFailure: function(err) {
        alert(err);
    },

    mfaRequired: function(codeDeliveryDetails) {
        var verificationCode = prompt('Please input verification code' ,'');
        cognitoUser.sendMFACode(verificationCode, this);
    }

});

//Change a Password

cognitoUser.changePassword('oldPassword', 'newPassword', function(err, result) {
    if (err) {
        alert(err);
        return;
    }
    console.log('call result: ' + result);
});
Forgotten P