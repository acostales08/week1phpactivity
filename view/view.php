<main>
    <div class="container">
        <!-- checking input value of palindrome or not using for, while and foreach -->
        <div class="card">
            <div class="title">
                <h1>Looping Reference</h1>
            </div>
            <div class="loop-body">
                <div class="form-group">
                    <label for="" class="">input</label>
                    <input type="text" class="input-form" id="txtinput" name="input" placeholder="input word here...">
                </div>
                <div class="button-group">
                    <input type="button" class="btn" value="Check using for loop" id="btn-forLoop" onclick="forLoopFunc()">
                    <input type="button" class="btn" value="Check using while loop" id="btn-forLoop" onclick="whileLoopFunc()">
                    <input type="button" class="btn" value="Check using foreach loop" id="btn-forLoop" onclick="forEachLoopFunc()">
                </div>
                <div class="output-form">
                    <p id="button-clicked"></p>
                    <h1 class="message" id="txtmessage"></h1>
                </div>
                <div class="output-form">
                    <div class="loop-body">
                        <div id="output-loop" class="output-loop"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- check if the entered number is odd or even -->
        <div class="card">
            <div class="title">
                <h1>Condition Reference</h1>
            </div>
            <div class="loop-body">
                <div class="form-group">
                    <label for="" class="">input</label>
                    <input type="number" class="input-form" id="txtinputNum" name="input" placeholder="input number here...">
                </div>
                <div class="button-group">
                    <input type="button" class="btn" value="Check" id="btn-forLoop" onclick="onSubmit()">
                </div>
                <div class="output-form">
                    <p id="button-clicked"></p>
                    <h1 class="message" id="txtmessageNum"></h1>
                </div>
            </div>
        </div>
        <!-- select country and  select city option will display base on selected country -->
        <div class="card">
            <div class="title">
                <h1>Country and City</h1>
            </div>
            <div class="loop-body">
                <div class="form-group">
                    <label for="" class="">Select Country</label>
                    <select class="input-form" id="country" name="country">
                        <option value="">Select Country</option>
                        <option value="Australia">Australia</option>
                        <option value="England">England</option>
                        <option value="Germany">Germany</option>
                        <option value="Philippines">Philippines</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="" class="">Select City</label>
                    <select class="input-form" id="city" name="city">
                        <option value="">Select City</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- string function reference -->
        <div class="card">
            <div class="title">
                <h1>String Function Reference</h1>
            </div>
            <div class="loop-body">
                <div class="form-group">
                    <input type="button" value="Go" class="btn" onclick="onSubmitSorting()">
                    <input type="text" class="input-form" id="txtCountry" value="January-February\March,April_May;June:July]August/September.October|November#December">
                </div>
                <div class="output-form">
                    <h1 class="message" id="txtStrOutput"></h1>
                </div>
            </div>
        </div>
        <!-- getting months and display to grid -->
        <div class="card">
            <div class="col">
                <input type="button" value="Get months" class="btn" id="btn" onclick="renderMonths()">
            </div>
            <div class="table">
                <table id="monthsTable">
                    <thead>
                        <tr>
                            <th>Sort</th>
                            <th>Month</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- getting last name, first name, and lastname and concatinate to 1 grid -->
        <div class="card">
            <div class="loop-body">
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Last name</th>
                                <th>First name</th>
                                <th>Middle name</th>
                            </tr>
                        </thead>
                        <tbody id="userData">
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <input type="button" value="Get Fullname" class="btn" id="btn" onclick="getFullNames()">
                </div>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Fullname</th>
                            </tr>
                        </thead>
                        <tbody id="userFullnameData">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- sorting  -->
        <div class="card">
            <div class="loop-body">
                <div class="table">
                    <table id="dataTable">
                        <thead>
                            <tr>
                                <th>Last name</th>
                                <th>Middle name</th>
                                <th>First name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody id="userDatawithage">
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="loop-body">
                <div class="table">
                    <table id="filtered-data">
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>Middle Name</th>
                                <th>First Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody id="sortedData">
                        </tbody>
                    </table>
                </div>
                <div class="sorting-group">
                    <div class="flex-col">
                        <label for="">First Name:</label>
                        <input class="input-form" type="text" id="searchInput">
                    </div>
                    <div class="">
                        <input type="radio" name="search-option" id="search-option-left" value="left">
                        <label for="search-option-left">Left most</label>
                        <input type="radio" name="search-option" id="search-option-anywhere" value="anywhere">
                        <label for="search-option-anywhere">Anywhere</label>
                    </div>
                    <div class="">
                        <input type="button" class="btn" value="Refresh" onclick="handleSorting()">
                    </div>
                </div>
                <div class="sorting-group">
                    <div class="">
                        <input type="radio" name="select-column" value="firstName">
                        <label for="">First Name</label>

                        <input type="radio" name="select-column" value="middleName">
                        <label for="">Middle Name</label>

                        <input type="radio" name="select-column" value="lastName">
                        <label for="">Last Name</label>

                        <input type="radio" name="select-column" value="age">
                        <label for="">Age</label>
                    </div>
                    <div class="flex-col">
                        <div class="">
                            <input type="radio" name="sort-option" value="asc">
                            <label for="">Ascending</label>
                        </div>
                        <div class="">
                            <input type="radio" name="sort-option" value="desc">
                            <label for="">Descending</label>
                        </div>
                    </div>
                </div>
                <div class="sorting-group">
                    <div class="total">
                        <div class="flex">
                            <p class="">Total of all ages:</p>
                            <p class="txtallATotal" id="totalAges"></p>
                        </div>
                        <div class="flex">
                            <p class="">Total Count of all Person:</p>
                            <div class="txtallATotal">
                                <p class="" id="personCount"></p>
                            </div>
                        </div>
                    </div>
                    <div class="total">
                        <div class="flex">
                            <p class="">Total ages of less than 40:</p>
                            <p class="txtallATotal" id="ageLessThan40Count"></p>
                        </div>
                        <div class="flex">
                            <p class="flex">Total Count of persons age is greater than 40:</p>
                            <p class="txtallATotal" id="ageGreaterThan40Count"></p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
</main>